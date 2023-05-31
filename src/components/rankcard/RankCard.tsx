import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

function TablaPosiciones() {
  const posiciones = [
    { nombre: 'Usuario 1', puntuacion: 100 },
    { nombre: 'Usuario 2', puntuacion: 80 },
    { nombre: 'Usuario 3', puntuacion: 120 },
  ];

  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Puntuación</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posiciones.map((usuario, index) => (
            <Tr key={index}>
              <Td>{usuario.nombre}</Td>
              <Td>{usuario.puntuacion}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default TablaPosiciones;
