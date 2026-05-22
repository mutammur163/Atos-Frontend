export default function AnnouncementBanner() {
  return (
    <div
      className="w-full py-4 border-b border-light-10"
      style={{
        backgroundColor: "transparent",
        borderBottomColor: "var(--border-light-10)",
      }}
    >
      <div className="container-atos flex items-center justify-center">
        <div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border"
          style={{
            backgroundColor: "var(--accent-12)",
            borderColor: "var(--accent-25)",
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{
              backgroundColor: "var(--accent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "var(--text-light-55)",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontWeight: "700",
                textTransform: "uppercase",
                color: "white",
                backgroundColor: "var(--accent)",
                padding: "2px 6px",
                borderRadius: "4px",
                marginRight: "8px",
              }}
            >
              NEW
            </span>
            Summer collection is now live
          </span>
        </div>
      </div>
    </div>
  );
}
