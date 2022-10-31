export const helloPubSub = (event: any, context: any) => {
  const message = event.data
    ? event.data : 'Hello, World';
  console.log(message);
  console.log('...running')
};


