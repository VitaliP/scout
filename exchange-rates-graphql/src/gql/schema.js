export const typeDefs = `

    type ModalWindow {
        modalState: Boolean!,
        type: String,
        message: String  
    }

    type Query {
        screenState: String!
        modal: ModalWindow
    }
  
    type Mutation {
        hideModal(): ModalWindow,
        showModal(): ModalWindow
    }  
`;