import React from "react";
import { Box, Typography, Divider } from "@mui/material";

interface DisplayItemProps {
  name: string;
  hours: number;
  minutes: number;
  endTime: string;
}

const DisplayItem: React.FC<DisplayItemProps> = ({
  name,
  hours,
  minutes,
  endTime,
}) => {
  const getStartTime = () => {
    const date = new Date(`1970-01-01T${endTime}:00`);
    date.setHours(date.getHours() - hours);
    date.setMinutes(date.getMinutes() - minutes);
    return date.toTimeString().slice(0, 5);
  };
  const formatTime = () => {
    const parts = [];
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    return parts.length > 0 ? parts.join(" ") : "0m";
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          py: 1,
        }}
      >
        <Typography variant="body1" sx={{ flex: 1, fontWeight: 500 }}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", minWidth: "fit-content" }}
        >
          Takes: {formatTime()}
        </Typography>
        <Typography variant="body1" sx={{ flex: 1, fontWeight: 500 }}>
          Start cooking at: {getStartTime()}
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default DisplayItem;
