module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            process.env.CDN,
            'cdn.discordapp.com',
            'www.gravatar.com',
            process.env.SUPABASE_URL,
        ],
    },
}
