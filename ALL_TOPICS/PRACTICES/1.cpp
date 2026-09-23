#include<iostream>
using namespace std;
int main(){
int num=123456;
int rev=0;

for(int i=0;i<6;i++){
 int Ldig= num%10;
   num=num/10;
   rev = rev * 10 + Ldig;

}
  cout<<"the number :-" <<rev;

return 0;
}