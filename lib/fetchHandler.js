import Router from 'next/router';

export default async function fetchHandler(path, method, ctx, body = {}) {
  const { cookie } = ctx.req.headers;
  const host =
    process.env.NODE_ENV !== 'development'
      ? 'https://keyserviceshost.vercel.app'
      : 'http://localhost:5000';

  const resp = await fetch(`${host}${path}`, {
    headers: {
      cookie
    },
    method,
    body
  });

  if (resp.status === 401 && !ctx.req) {
    Router.replace('/login');
  }

  if (resp.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: `${host}/login`
    });
    ctx.res.end();
  }

  const json = await resp.json();
  return json;
}
