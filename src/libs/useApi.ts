export type getTenantResponse = {
   name: string;
   mainColor: string;
   secondColor: string;
}

export const useApi = () => ({

   getTenant: (tenantSlug: string): boolean | getTenantResponse => {
      switch (tenantSlug) {
         case 'b7burger':
            return {
               name: 'b7Burger',
               mainColor: '#FF0000',
               secondColor: '#00FF00',
            }
            break;
         case 'b7pizza':
            return {
               name: 'b7Pizza',
               mainColor: '#0000FF',
               secondColor: '#FFFF00',
            }
            break;

         default: return false;
      }
   }
})