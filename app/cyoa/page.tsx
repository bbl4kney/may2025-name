export default function ClientPage() {
    return(
        <>
        <div className="flex flex-wrap">
            {/* parent */}
            <div className="max-w-full flex">
                {/* child 1 OR image block */}
                <img className="h-auto md:max-w-sm" src="/squirrel1.jpg" alt="squirrel" />
                <img className="h-auto md:max-w-sm" src="https://images.unsplash.com/photo-1570499911518-9b95b0660755?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="chipmunk" />
                <img className="h-auto md:max-w-sm" src="/dragon1.jpg" alt="dragon" />
            </div>
            <div className="flex">
                {/* child 2 OR image block */}
                <img className="h-auto md:max-w-sm" src="/dog2.jpg" alt="pug" />
                <img className="h-auto md:max-w-sm" src="/cherryBlossom1.jpg" alt="cherry blossoms" />
                <img className="h-auto md:max-w-sm" src="/robot1.jpg" alt="robot" />
            </div>
            <div>
                {/* child 3 OR text block */}
                <p>text that is short</p>
                <p>text that is medddium</p>
                <p>text that is looooooooooooooooooooooooooong</p>
            </div>
        </div>
        </>
    )
}
