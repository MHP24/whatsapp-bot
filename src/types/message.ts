export type TMessage = {
  type: 'text' | 'interactive',
  senderId: string,
  data: string | null
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
