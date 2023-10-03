import { MatPaginatorIntl } from '@angular/material';

export function CustomPaginator() {
    const customPaginatorIntl = new MatPaginatorIntl();
    
    customPaginatorIntl.itemsPerPageLabel = '';
  
    customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return `0 of ${length}`;
      }
  
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
  
      return `Result: ${startIndex + 1} - ${endIndex} of ${length}`;
      
    };
  
    // // Add the following code to customize the input
  
  
    customPaginatorIntl.firstPageLabel = 'Rows';
  
    return customPaginatorIntl;
  }
  