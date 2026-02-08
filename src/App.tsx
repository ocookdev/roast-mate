import { useState } from "react";
import "./App.css";
import TimeInput from "./components/TimeInput";
import AddItem from "./components/AddItem";
import { Box, Container, Typography } from "@mui/material";
import DisplayItem from "./components/DisplayItem";

interface ScheduleItem {
  name: string;
  hours: number;
  minutes: number;
}

function App() {
  const [readyTime, setReadyTime] = useState("19:00");
  const [scheduledItems, setScheduledItems] = useState<ScheduleItem[]>([]);

  const handleAddItem = (item: {
    name: string;
    hours: number;
    minutes: number;
  }) => {
    console.log("New item added to the schedule:", item);
    setScheduledItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h6"
        component="h2"
        sx={{ mb: 1, color: "text.secondary" }}
      >
        Fancy a
      </Typography>
      <Typography variant="h1" component="h1" sx={{ mb: 4 }}>
        Roast Mate?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          width: "100%",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="body1">
          When do you want the roast to be ready?:
        </Typography>
        <TimeInput
          value={readyTime}
          onChange={(newValue) => {
            setReadyTime(newValue);
            console.log("Selected time:", newValue);
          }}
        />
      </Box>
      <AddItem addAction={handleAddItem} />
      {scheduledItems.map((item) => (
        <DisplayItem
          key={item.name}
          name={item.name}
          hours={item.hours}
          minutes={item.minutes}
          endTime={readyTime}
        />
      ))}
    </Container>
  );
}

export default App;
