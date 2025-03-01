/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'haiaboavista.com.br',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'construtoraagvelasco.com.br',
          port: ''
        },
        {
          protocol: 'https',
          hostname: 'www.a7snegociosimobiliarios.com.br',
          port: ''
        },          
        {
          protocol: 'https',
          hostname: 'imgs.kenlo.io',
          port: ''
        },
        {
          protocol: 'https',
          hostname: 'umcjnkxyxffzepepkbgl.supabase.co',
          port: ''
        },     
      ],
    },
};

export default nextConfig;
