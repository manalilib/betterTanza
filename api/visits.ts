import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const token = process.env.VERCEL_API_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamSlug = process.env.VERCEL_TEAM_SLUG;
  if (!token || !projectId || !teamSlug) {
    res.status(500).json({ error: 'missing configuration' });
    return;
  }

  const params = new URLSearchParams({ projectId, slug: teamSlug });

  try {
    const upstream = await fetch(
      `https://api.vercel.com/v1/query/web-analytics/visits/count?${params}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await upstream.json();
    res.status(200).json({ count: data?.data?.pageviews ?? null });
  } catch {
    res.status(502).json({ error: 'upstream failed' });
  }
}
