/**
 * Logo oficial FOCI — Fonoaudiología Clínica Integral
 * Carga de la imagen de logotipo oficial (logo-foci.png)
 */
export default function FociLogo({ size = 'md', transparent = false, className = '' }) {
  const sizes = {
    sm:  { width: 194, height: 80  }, // Optimized for mobile header (80px height)
    md:  { width: 230, height: 95  }, // Standard size (95px height)
    lg:  { width: 266, height: 110 }, // Large size (110px height)
    xl:  { width: 315, height: 130 }, // Extra large size (130px height)
  };
  const { width, height } = sizes[size] || sizes.md;

  const src = transparent ? "/logo-foci.png?v=9" : "/logo-foci-card.png?v=9";

  return (
    <img
      src={src}
      alt="FOCI Fonoaudiología Clínica Integral"
      width={width}
      height={height}
      style={{
        objectFit: 'contain',
      }}
      className={`max-w-full inline-block ${className}`}
    />
  );
}



