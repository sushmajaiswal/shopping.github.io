export default function LoginComponent(){
    const title="User Login";
    return(
        <div>
            <h2>{title}</h2>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input type="text"/>
                </dd>
                <dt>Password</dt>
                <dd>
                    <input type="password"/>
                </dd>

            </dl>
            <button>Login</button>
        </div>
    )
}