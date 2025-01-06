import React from 'react';

export const Table = ({ children }: { children: React.ReactNode }) => (
  <table className="w-full border-collapse border border-gray-200">{children}</table>
);

export const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gray-100">{children}</thead>
);

export const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="hover:bg-gray-50">{children}</tr>
);

export const TableHead = ({ children }: { children: React.ReactNode }) => (
  <th className="p-3 text-left">{children}</th>
);

export const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>{children}</tbody>
);

export const TableCell = ({ children }: { children: React.ReactNode }) => (
  <td className="p-3">{children}</td>
);