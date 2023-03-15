import { Sidebar } from "primereact/sidebar";
import React from "react";
import { useState } from "react";

function NavigationBar() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <div className="card">
        <Sidebar
          visible={visible}
          position="left"
          onHide={() => setVisible(false)}
          style={{ border: 3, width: 200 }}
        />
      </div>
    </div>
  );
}

export default NavigationBar;