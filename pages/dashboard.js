import Router from "next/router";

const Dashboard = () => {
  return (
    <section className="section container">
      <div className="container is-mobile">
        <p>Dashboard</p>
      </div>
    </section>
  );
};

Dashboard.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};  
  const host =
    process.env.NODE_ENV !== 'development'
      ? 'https://keyserviceshost.vercel.app/'
      : 'http://localhost:5000';
  const res = await fetch(`${host}/api/auth`, {
    headers: {
      cookie
    }
  });

  if (res.status === 401 && !ctx.req) {
    Router.replace('/login');
  }

  if (res.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  }
  return { authenticated: true };
};

export default Dashboard;
