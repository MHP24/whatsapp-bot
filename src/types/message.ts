export type TMessage = {
  id: string,
  type: 'text' | 'interactive',
  senderId: string,
  content: string
}


export type TAdapterText = {
  timestamp: string,
  text: {
    body: string,
  }
}

export type TAdapterReply = {
  interactive: {
    type: 'list_reply';
    list_reply: {
      id: string;
      title: string;
    };
  };
};
