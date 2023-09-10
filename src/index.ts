import { app } from './app';
import { appConfig } from './config';

const { port } = appConfig;
app.listen(port, () => console.log(`App ready on port ${port}`));