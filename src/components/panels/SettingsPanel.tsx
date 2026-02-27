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
        width: 250,
        padding: 20,
        borderLeft: "1px solid #ddd",
        background: "#fafafa",
      }}
    >
      <button onClick={onBack}>⬅ Back</button>

      <h3>Message Settings</h3>

      <label>Text</label>
      <input
        type="text"
        value={node?.data?.text || ""}
        onChange={handleChange}
        style={{ width: "100%", marginTop: 5 }}
      />
    </div>
  );
}

export default SettingsPanel;