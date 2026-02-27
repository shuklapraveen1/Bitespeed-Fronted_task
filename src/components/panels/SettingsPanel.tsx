type Props = {
  node: any;
  setNodes: any;
  onBack: () => void;
};

function SettingsPanel({ node, setNodes, onBack }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;

    setNodes((nds: any[]) =>
      nds.map((n) =>
        n.id === node.id
          ? { ...n, data: { ...n.data, text: newText } }
          : n
      )
    );
  };

  return (
    <div
      style={{
        width: 280,
        padding: 24,
        borderLeft: "1px solid #1f2937",
        background: "#111827",
        color: "white",
      }}
    >
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontWeight: 500,
          marginBottom: 20,
          color: "#9ca3af",
        }}
      >
        ← Back
      </button>

      <h2
        style={{
          fontSize: 18,
          fontWeight: 600,
          marginBottom: 20,
        }}
      >
        Message Settings
      </h2>

      <label style={{ fontSize: 14, fontWeight: 500 }}>
        Text
      </label>

      <input
        type="text"
        value={node?.data?.text || ""}
        onChange={handleChange}
        style={{
          width: "100%",
          marginTop: 8,
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #374151",
          background: "#1f2937",
          color: "white",
          outline: "none",
        }}
      />
    </div>
  );
}

export default SettingsPanel;