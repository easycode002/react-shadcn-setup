import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './components/Table';
import { Button } from './components/ui/button';

function App() {
  return (
    <>
      <h1 className="bg-red-300">Table</h1>
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>28</TableCell>
              <TableCell>Developer</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>34</TableCell>
              <TableCell>Designer</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button size={'lg'} variant={'secondary'}>Click me</Button>
      </div>
    </>
  );
}

export default App;