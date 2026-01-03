#include<iostream>
using namespace std;
int main()
{
    int arr[2][3];
    int tranArray[3][2];
    cout<<"enter the array "<<endl;
    for(int i=0;i<2;i++)
    {
        for(int j=0;j<3;j++)
        {
            cin>>arr[i][j];
        }
    }
    for(int i=0;i<3;i++)
    {
        for(int j=0;j<2;j++)
        {
            tranArray[i][j]= arr[j][i];
        }
    }
     for(int i=0;i<3;i++)
    {
        for(int j=0;j<2;j++)
        {
            cout<<tranArray[i][j]<<"\t";
        }
        cout<<"\n";
    }
}