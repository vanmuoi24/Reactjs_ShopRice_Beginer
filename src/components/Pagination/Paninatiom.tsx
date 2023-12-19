import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";

interface PaginationProps {
  totalIteam: number;
  itemPerPage: number;
}
const Paniation: React.FC<PaginationProps> = ({ totalIteam, itemPerPage }) => {
  console.log(totalIteam, itemPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePaginationChange = () => {};
  return (
    <>
      <ResponsivePagination
        current={currentPage}
        total={Math.ceil(totalIteam / itemPerPage)}
        onPageChange={handlePaginationChange}
      />
    </>
  );
};

export default Paniation;
