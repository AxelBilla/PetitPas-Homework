import '../App.css';

const infos = await getUserInfos()

export default function Home() {
  let user = infos;
  return (
      <div>
          <h1> Email: {user.email} </h1>
          <h1> Name:  {user.name} </h1>
          <h1> ID:    {user.id} </h1>
      </div>
  );
}

async function getUserInfos(){
    const storedEmail = localStorage.getItem("email");

    const req = await fetch("http://54.37.69.170:999/getInfos",{
      method: "POST",
      body: JSON.stringify({email: storedEmail}),
      headers: {"Content-Type": "application/json"} 
    });
    const res = await req.json();
    return res.content[0]
}