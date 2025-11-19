const FluidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Animated fluid blobs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
      <div className="absolute top-0 -right-40 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-primary/15 rounded-full mix-blend-screen filter blur-3xl animate-blob-reverse" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/15 rounded-full mix-blend-screen filter blur-3xl animate-blob-reverse animation-delay-3000" />
      
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </div>
  );
};

export default FluidBackground;
