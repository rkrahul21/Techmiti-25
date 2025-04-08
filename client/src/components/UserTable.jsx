import React,{useState} from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";


const UserTable = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ravi Sharma",
      email: "ravi@example.com",
      techmiti_id: "TM12345",
      transaction_id: "TXN456789",
      college: "MIT",
      verified: false,
    },
    {
      id: 2,
      name: "Simran Kaur",
      email: "simran@example.com",
      techmiti_id: "TM54321",
      transaction_id: "TXN987654",
      college: "GCE",
      verified: true,
    },
  ]);

  const toggleVerification = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, verified: !user.verified } : user
      )
    );
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Techmiti ID</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>College</TableHead>
            <TableHead>Verified</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.techmiti_id}</TableCell>
              <TableCell>{user.transaction_id}</TableCell>
              <TableCell>{user.college}</TableCell>
              <TableCell>
                {user.verified ? (
                  <span className="text-green-600 font-semibold">Yes</span>
                ) : (
                  <span className="text-red-600 font-semibold">No</span>
                )}
              </TableCell>
              <TableCell>
                <Button
                  variant={user.verified ? "outline" : "default"}
                  onClick={() => toggleVerification(user.id)}
                >
                  {user.verified ? "Unverify" : "Verify"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTable;