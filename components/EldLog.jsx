import React, { useRef, useEffect } from 'react';

const ELDLog = ({ logData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // --- Drawing functions ---

    const drawGrid = () => {
      ctx.strokeStyle = 'black'; // Grid line color
      ctx.lineWidth = 0.5;

      // Vertical lines (hours)
      for (let i = 0; i <= 24; i++) {
        const x = 50 + (i / 24) * (width - 100); // Calculate x position
        ctx.beginPath();
        ctx.moveTo(x, 20);
        ctx.lineTo(x, height - 20);
        ctx.stroke();
      }

      // Horizontal lines (status rows)
      const rowHeight = (height - 40) / 4; // Height of each status row

      for (let i = 0; i <= 4; i++) {
        const y = 20 + i * rowHeight; // Calculate y position
        ctx.beginPath();
        ctx.moveTo(50, y);
        ctx.lineTo(width - 50, y);
        ctx.stroke();
      }

      // Total Hours Column Separator
      ctx.beginPath();
      ctx.moveTo(width - 50, 20);
      ctx.lineTo(width - 50, height - 20);
      ctx.stroke();
    };

    const drawTimeLabels = () => {
      ctx.font = '10px Arial';
      ctx.fillStyle = 'black';

      // Time labels
      ctx.fillText('MID-', 50, 15);
      ctx.fillText('NIGHT', 50, 25);

      for (let i = 1; i <= 11; i++) {
        const x1 = 50 + (i / 24) * (width - 100);
        const x2 = 50 + ((i + 12) / 24) * (width - 100);
        ctx.fillText(i.toString(), x1 - 5, 15);
        ctx.fillText(i.toString(), x2 - 5, 15);
      }

      ctx.fillText('NOON', 50 + (12 / 24) * (width - 100) - 10, 15);
      ctx.fillText('24', width - 55, 15);
    };

    const drawStatusLabels = () => {
      ctx.font = '10px Arial';
      ctx.fillStyle = 'black';

      const rowHeight = (height - 40) / 4;
      const yOffset = 20 + rowHeight / 2 + 5; // Center text vertically in row

      ctx.fillText('1. OFF DUTY', 5, yOffset);
      ctx.fillText('2. SLEEPER', 5, yOffset + rowHeight);
      ctx.fillText('   BERTH', 5, yOffset + rowHeight + 10);
      ctx.fillText('3. DRIVING', 5, yOffset + 2 * rowHeight);
      ctx.fillText('4. ON DUTY', 5, yOffset + 3 * rowHeight);
      ctx.fillText('   (NOT DRIVING)', 5, yOffset + 3 * rowHeight + 10);
    };

    const drawStatusBars = () => {
      const rowHeight = (height - 40) / 4;

      logData.forEach(entry => {
        const startX = calculateX(entry.start);
        const endX = calculateX(entry.end);
        let y;

        switch (entry.status) {
          case 'Off Duty':
            y = 20;
            break;
          case 'Sleeper Berth':
            y = 20 + rowHeight;
            break;
          case 'Driving':
            y = 20 + 2 * rowHeight;
            break;
          case 'On Duty':
            y = 20 + 3 * rowHeight;
            break;
          default:
            return; // Skip if status is invalid
        }

        ctx.fillStyle = 'lightgray'; // Status bar color
        ctx.fillRect(startX, y, endX - startX, rowHeight);

        ctx.font = '10px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(entry.hours.toString(), (startX + endX) / 2 - 5, y + rowHeight - 5); // Hour text
      });
    };

    const drawTotalHours = () => {
      ctx.font = '10px Arial';
      ctx.fillStyle = 'black';

      const rowHeight = (height - 40) / 4;
      const x = width - 45; // X position for total hours

      // Calculate total hours for each status
      const totals = {
        'Off Duty': 0,
        'Sleeper Berth': 0,
        'Driving': 0,
        'On Duty': 0,
      };

      logData.forEach(entry => {
        totals[entry.status] += entry.hours;
      });

      ctx.fillText(totals['Off Duty'].toString(), x, 20 + rowHeight / 2 + 5);
      ctx.fillText(totals['Sleeper Berth'].toString(), x, 20 + rowHeight + rowHeight / 2 + 5);
      ctx.fillText(totals['Driving'].toString(), x, 20 + 2 * rowHeight + rowHeight / 2 + 5);
      ctx.fillText(totals['On Duty'].toString(), x, 20 + 3 * rowHeight + rowHeight / 2 + 5);
    };

    // --- Helper functions ---

    const calculateX = (time) => {
      const [hours, minutes] = time.split(':').map(Number);
      return 50 + ((hours * 60 + minutes) / (24 * 60)) * (width - 100);
    };

    // --- Main draw function ---

    const draw = () => {
      drawGrid();
      drawTimeLabels();
      drawStatusLabels();
      drawStatusBars();
      drawTotalHours();
    };

    draw();
  }, [logData]);

  return <canvas ref={canvasRef} width={800} height={300} />;
};

export default ELDLog;