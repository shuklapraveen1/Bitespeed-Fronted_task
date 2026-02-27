function NodesPanel() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
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
      <h2
        style={{
          margin: 0,
          fontSize: 18,
          fontWeight: 600,
          marginBottom: 20,
        }}
      >
        Nodes
      </h2>

      <div
        draggable
        onDragStart={(event) => onDragStart(event, "textNode")}
        style={{
          padding: 14,
          border: "1px solid #374151",
          borderRadius: 12,
          cursor: "grab",
          background: "#1f2937",
          fontWeight: 500,
          transition: "all 0.2s ease",
        }}
      >
        💬 Message
      </div>
    </div>
  );
}

export default NodesPanel;