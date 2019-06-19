export const defaults = {

    screenState: 'init',

    modal: {
        modalState: false,
        type: null,
        message: null,
        __typename: 'ModalWindow'
    }
};

export const resolvers = {

    Mutation: {
        hideModal: (_root, variables, { cache, getCacheKey }) => {
            cache.writeData({
                data: {
                    modal: {
                        __typename: 'ModalWindow',
                        modalState: false,
                    },
                },
            });
            return null;
        },
        showModal: (_root, variables, { cache, getCacheKey }) => {
            cache.writeData({
                data: {
                    modal: {
                        __typename: 'ModalWindow',
                        modalState: true,
                        type: variables.type,
                        message: variables.message

                    },
                },
            });
            return null;
        },
    },

};
