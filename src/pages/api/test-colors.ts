import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Test environment variables
  const testColors = {
    goldPrimary: process.env.NEXT_PUBLIC_COLOR_GOLD_PRIMARY,
    goldHover: process.env.NEXT_PUBLIC_COLOR_GOLD_HOVER,
    textPrimary: process.env.NEXT_PUBLIC_COLOR_TEXT_PRIMARY,
    bgWhite: process.env.NEXT_PUBLIC_COLOR_BG_WHITE,
    shadowStandardOpacity: process.env.NEXT_PUBLIC_SHADOW_STANDARD_OPACITY,
    allEnvVars: Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC_COLOR_'))
  };

  res.status(200).json({
    message: 'Color environment variables test',
    colors: testColors,
    timestamp: new Date().toISOString()
  });
} 