function NodesPanel() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
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
      <h3>Nodes</h3>

      <div
        draggable
        onDragStart={(event) => onDragStart(event, "textNode")}
        style={{
          padding: 10,
          border: "1px solid #aaa",
          borderRadius: 6,
          cursor: "grab",
          marginTop: 10,
          background: "white",
        }}
      >
        Message
      </div>
    </div>
  );
}

export default NodesPanel;