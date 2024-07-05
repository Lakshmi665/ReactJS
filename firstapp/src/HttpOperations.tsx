import { useState } from "react";
import { StickyNote } from "./StickyNoteComponents/StickyNote";

export function HttpOperations() {
    let [posts, setPosts] = useState<any[]>([])
    function getData() {
        var result: Promise<Response> = fetch('https://jsonplaceholder.typicode.com/posts');
        result.then((res) => res.json())
               .then(data => setPosts(data))
    }

    function postData() {
        let response : Promise<Response> = fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                body: JSON.stringify({              
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }),
                // headers: {'Content-type': 'application/json; charset=UTF-8'}
            }
        )
        response.then(res => res.json())
                 .then(data => console.log(data))
    }

    function putData() {
        let response : Promise<Response> = fetch('https://jsonplaceholder.typicode.com/posts/1',
            {
                method: 'PUT',
                body: JSON.stringify({              
  "userId": 1,
  "id": 1,
  "title": "test",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }),
                // headers: {'Content-type': 'application/json; charset=UTF-8'}
            }
        )
        response.then(res => res.json())
                 .then(data => console.log(data))
    }
    return (
        <>
        <button onClick={() => getData()}>Get Data</button>
        <button onClick={() => postData()}>Post Data</button>
        <button onClick={() => putData()}>Post Data</button>
        <hr/>
        <div style={{display: 'flex'}}>
        {posts.map((post) => {
            return (<StickyNote title={post.title}/>)
        })}
        </div>
        </>
    )
}