const apiRequest = async (data) => {
    let fetchResult = {
        status: false,
        response: null
    }
    const entryPoint = 'http://localhost:3007/'; 

    let fetchRequest;
    try{
        console.log(JSON.stringify(data));
        fetchRequest = await fetch(entryPoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json; charset=UTF-8',
                'Content-Type': 'application/json; charset=UTF-8',
              },
              body: JSON.stringify(data)
        });
        fetchResult = fetchRequest.json();
    } catch(error) {
        console.warn('Api request error');
        console.error({ error });
        console.log({fetchRequest});
    }
    console.log(fetchResult);
    return fetchResult;
}
export default apiRequest ;