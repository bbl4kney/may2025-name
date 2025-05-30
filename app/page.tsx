// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { CircleAlert } from "lucide-react";

import TodoList from "@/components/todolist";

export default function Home() {
  return (
    <>
      <TodoList />
      <br />
      <div className="border-black border-2">
        {/* tailwind demo 5/15 */}
        <p>This is where I will be doing basic Tailwind demos.</p>
        <p>
          <b>Pay attention to where the className goes!</b>
        </p>
        <p className="text-pink-500">FOREGROUND COLOR</p>
        <p className="bg-purple-500">BACKGROUND COLOR</p>
        <div>
          <p className="m-4">margin</p>
          <p className="p-8">padding</p>
        </div>
      </div>
      <div className="flex justify-between m-10 border-1 border-black">
        {/* parent container */}
        <div className="m-2 border-1 border-red-500">
          {/* child #1 */}
          <p>grandchild #1</p>
        </div>
        <div className="m-2 w-96 border-1 border-green-500">
          {/* child #2 */}
          <p>grandchild #2</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>images</p>
          <p>images</p>
          <p>images</p>
          <p>link</p>
          <p>images</p>
        </div>
        <div className="m-2 border-1 border-blue-500">
          {/* child #3 */}
          <p>grandchild #3</p>
        </div>
      </div>
    </>
  );
}
