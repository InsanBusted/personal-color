const FaceOutline = () => {
  return (
    <svg
      width="300"
      height="380"
      viewBox="0 0 300 380"
      fill="none"
      className="absolute top-10 left-1/2 -translate-x-1/2 scale-x-[-1]"
    >
      <path
        d="
        M150 20
        C110 20, 80 70, 80 120
        C65 160, 65 200, 80 240

        C70 255, 60 270, 75 290   <!-- gelombang kiri -->
        C60 310, 75 330, 90 340

        C120 360, 180 360, 210 340

        C225 330, 240 310, 225 290 <!-- gelombang kanan -->
        C240 270, 230 255, 220 240

        C235 200, 235 160, 220 120
        C220 70, 190 20, 150 20
        Z"
        stroke="white"
        strokeWidth="4"
        strokeDasharray="8 8"
        fill="none"
      />
    </svg>
  );
};

export default FaceOutline;
