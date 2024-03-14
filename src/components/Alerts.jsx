import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Alerts = () => {
  return (
    <Card classname="m-4">
      <CardHeader>
        <CardTitle>Alerts</CardTitle>
        <CardDescription>AQI News</CardDescription>
      </CardHeader>
      <CardContent>
        <div className=" border-l-red-600 border-l-4 p-2 bg-secondary">
          <p>Today 9:30am</p>
          <p className="font-medium">CO levels exceed the limit </p>
        </div>
      </CardContent>
      <CardContent>
        <div className=" border-l-green-600 border-l-4 p-2 bg-secondary">
          <p>Today 10:00am</p>
          <p className="font-medium">NO2 levels decrease</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Alerts;
