const CardImage = ({ src, alt }) => (
    <div style={{
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    }}>
        <img src={src} alt={alt} style={{
            borderRadius: '50%', 
            width: '100px',      
            height: '100px',     
            objectFit: 'cover'   
        }} />
    </div>
);

const CardDetails = ({ name, email }) => (
    <div style={{
        textAlign: 'center',
        padding: '16px',
    }}>
        <h3 style={{
            margin: '0 0 8px 0',
            fontSize: '1.2em'
        }}>{name}</h3>
        <p style={{
            margin: '0',
            color: '#555'
        }}>{email}</p>
    </div>
);

const CardStats = ({ posts, following, followers }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '16px',
        borderBottom: '1px solid #ddd'
    }}>
        <div style={{ textAlign: 'center' }}>
            <h4 style={{ margin: '0' }}>{posts}</h4>
            <p style={{ margin: '0' }   }>Posts</p>
        </div>
        <div style={{ textAlign: 'center' }}>
            <h4 style={{ margin: '0' }}>{following}</h4>
            <p style={{ margin: '0' }}>Following</p>
        </div>
        <div style={{ textAlign: 'center' }}>
            <h4 style={{ margin: '0' }}>{followers}</h4>
            <p style={{ margin: '0' }}>Followers</p>
        </div>
    </div>
);

const Card = ({ imageSrc, imageAlt, posts, following, followers, name, email }) => (
    <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        maxWidth: '300px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        fontFamily: "Roboto"
    }}>
        <CardImage src={imageSrc} alt={imageAlt} />
        <CardDetails name={name} email={email} />
        <CardStats posts={posts} following={following} followers={followers} />
    </div>
);

const App = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
    }}>
        <Card
            imageSrc="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
            posts="25"
            following="350"
            followers="1.5k"
            name="Julianne Moore"
            email="Julianne.moore@company.com"
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
