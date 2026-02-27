import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  type Connection,
  type Edge,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import { useCallback, useState } from "react";

import TextNode from "./components/nodes/TextNode";
import NodesPanel from "./components/panels/NodesPanel";
import SettingsPanel from "./components/panels/SettingsPanel";

const nodeTypes = {
  textNode: TextNode,
};

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { screenToFlowPosition } = useReactFlow();

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  // Restrict one outgoing edge per node
  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((existingEdges) => {
        if (!params.source) return existingEdges;

        const outgoingEdges = existingEdges.filter(
          (edge) => edge.source === params.source
        );

        if (outgoingEdges.length >= 1) {
          alert("Only one outgoing connection allowed per node.");
          return existingEdges;
        }

        return addEdge(params, existingEdges);
      });
    },
    []
  );

  // Allow drop
  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  // Handle drop
  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();

    const type = event.dataTransfer.getData("application/reactflow");
    if (!type) return;

    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    const newNode = {
      id: Date.now().toString(),
      type,
      position,
      data: { text: "New Message" },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  // Save validation
  const handleSave = () => {
    setError(null);

    if (nodes.length <= 1) {
      alert("Flow saved successfully!");
      return;
    }

    const nodesWithoutIncoming = nodes.filter(
      (node) => !edges.some((edge) => edge.target === node.id)
    );

    if (nodesWithoutIncoming.length > 1) {
      setError("More than one node has no incoming connection.");
    } else {
      alert("Flow saved successfully!");
    }
  };

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <div style={{ flex: 1, position: "relative" }}>
        {/* Error Banner */}
        {error && (
          <div
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#ff4d4f",
              color: "white",
              padding: "8px 16px",
              borderRadius: 4,
              zIndex: 20,
            }}
          >
            {error}
          </div>
        )}

        {/* Save Button */}
        <button
          onClick={handleSave}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 10,
            padding: "8px 12px",
            background: "#00acc1",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Save
        </button>

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onNodeClick={(event, node) => setSelectedNodeId(node.id)}
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>

      {selectedNode ? (
        <SettingsPanel
          node={selectedNode}
          setNodes={setNodes}
          onBack={() => setSelectedNodeId(null)}
        />
      ) : (
        <NodesPanel />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}