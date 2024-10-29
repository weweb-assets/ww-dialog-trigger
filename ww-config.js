export default {
    inherit: 'ww-text',
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'inline-flex'],
        linkable: true,
    },
    editor: {
        label: {
            en: 'Trigger',
            fr: 'Déclencheur',
        },
        icon: 'cursor-click',
        infoTags: () => {
            return [];
        },
        workflowHint: () => {
            return false;
        },
    },
    states: ['focus', 'disabled'],
    triggerEvents: [
        {
            name: 'change',
            label: {
                en: 'On value change',
                fr: 'Changement de valeur',
            },
            event: null,
        },
    ],
    properties: {
        clickOpens: {
            type: 'OnOff',
            label: {
                en: 'Click opens',
                fr: 'Ouverture au clic',
            },
            section: 'settings',
            defaultValue: true,
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip:
                    'You can disable the whole trigger to open the Dialog. For example, if you want to open it with a smaller icon or button inside the trigger.',
            },
            /* wwEditor:end */
        },
    },
};
