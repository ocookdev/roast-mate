import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
} from "@mui/material";

interface AddItemProps {
  addAction: (item: { name: string; hours: number; minutes: number }) => void;
}

const AddItem: React.FC<AddItemProps> = ({ addAction }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setName("");
    setHours(0);
    setMinutes(0);
  };

  const handleSubmit = () => {
    console.log("Item added:", { name, hours, minutes });
    addAction({ name, hours, minutes });
    closeModal();
  };

  return (
    <div>
      <Button variant="contained" onClick={openModal}>
        Add Item
      </Button>
      <Dialog open={isModalOpen} onClose={closeModal} maxWidth="sm" fullWidth>
        <DialogTitle>What's cooking?</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                sx={{ flex: 1 }}
                label="Hours"
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                inputProps={{ min: "0" }}
                variant="outlined"
              />
              <TextField
                sx={{ flex: 1 }}
                label="Minutes"
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                inputProps={{ min: "0", max: "59" }}
                variant="outlined"
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddItem;
