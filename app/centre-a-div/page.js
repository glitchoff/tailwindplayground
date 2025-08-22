import Markdown from "react-markdown";

export default function centreDiv(){

    return (
    <>
    <h1>Centre a div</h1>
    <div>
 

<div className="relative justify-center h-[90vh]">

<Markdown>
{`
\`\`\`jsx
<div className="relative h-screen">
  <button className="absolute bg-red-500 h-10 w-10 bottom-0 left-1/2 transform -translate-x-1/2">
    hello
  </button>
</div>
\`\`\`
`}
</Markdown>


    <button className="absolute bg-red-500 h-10 w-10 bottom-0 left-1/2 transform -translate-x-1/2 " > hello </button>
    </div>
  


    </div>
    </>
    )
}