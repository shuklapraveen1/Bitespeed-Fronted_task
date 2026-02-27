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
            padding: 12,
            borderRadius: 10,
            background: "white",
            border: "1px solid #00acc1",
            width: 220,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
    >
      <strong>Send Message</strong>

      <div style={{ marginTop: 8 }}>
        {data.text}
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default TextNode;