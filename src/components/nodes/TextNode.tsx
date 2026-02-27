import { Handle, Position } from "reactflow";

type TextNodeProps = {
  data: {
    text: string;
  };
};

function TextNode({ data }: TextNodeProps) {
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 14,
        background: "white",
        border: "1px solid #000000",
        width: 240,
        boxShadow: "0 6px 18px rgba(30, 30, 32, 0.06)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: "#1b1c1c",
          marginBottom: 6,
          textTransform: "uppercase",
        }}
      >
        Message
      </div>

      <div
        style={{
          fontSize: 14,
          color: "#3571f1",
          lineHeight: 1.4,
        }}
      >
        {data.text}
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default TextNode;