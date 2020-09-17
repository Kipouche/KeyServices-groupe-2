import Router from 'next/router';

const Agenda = () => {
  return <div>Profile</div>;
};

Agenda.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};
  const host =
    process.env.NODE_ENV !== 'development'
      ? process.env.ROOT_URL
      : 'http://localhost:5000';
  const resAuth = await fetch(`${host}/api/auth`, {
    headers: {
      cookie
    }
  });
  if (resAuth.status === 401 && !ctx.req) {
    Router.replace('/login');
  }

  if (resAuth.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  }
  if (resAuth.status === 200) {
    const jwt = await resAuth.json();
    if (!ctx.req) {
      Router.replace(`/dashboard/profile/${jwt.message.sub}/agenda`);
    }

    if (ctx.req) {
      ctx.res.writeHead(302, {
        Location: `/dashboard/profile/${jwt.message.sub}/agenda`
      });
      ctx.res.end();
    }
  }
  return { redirected: true }
};

export default Agenda;
