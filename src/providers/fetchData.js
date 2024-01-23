export async function GET_DATA(url){

    let data = {}    
    try{
        data = await fetch(url).then(response => response.json())        
    } catch (error){
        console.log(error)
    } 
    return data
}

export async function POST_DATA(data, url){    
    await fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })    
}

export async function PUT_DATA(data, url){    
    await fetch(url,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })    
}