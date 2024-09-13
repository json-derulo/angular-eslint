import { createESLintRule } from '../utils/create-eslint-rule';
import { getParserServices } from '@typescript-eslint/utils/eslint-utils';
import {
  getCallLikeNode,
  getCallLikeNodeSignature,
  getSymbol,
  hasJsDocTag,
  isDeclaration,
  isInsideExportOrImport,
} from '../utils/jsdoc';

export type Options = [];
export type MessageIds = 'noDeveloperPreview';
export const RULE_NAME = 'no-developer-preview';

export default createESLintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: `Disallow using code which is marked as developer preview`,
    },
    schema: [],
    messages: {
      noDeveloperPreview: '`{{name}}` is in developer preview',
    },
  },
  defaultOptions: [],
  create(context) {
    const services = getParserServices(context);
    const checker = services.program.getTypeChecker();

    return {
      Identifier: (node) => {
        if (isDeclaration(node) || isInsideExportOrImport(node)) {
          return;
        }

        const callLikeNode = getCallLikeNode(node);
        const signatureOrSymbol = callLikeNode
          ? getCallLikeNodeSignature(callLikeNode, services, checker)
          : getSymbol(node, services);

        if (!hasJsDocTag(signatureOrSymbol, 'developerPreview')) {
          return;
        }

        const { name } = node;

        context.report({
          node,
          messageId: 'noDeveloperPreview',
          data: { name },
        });
      },
    };
  },
});
