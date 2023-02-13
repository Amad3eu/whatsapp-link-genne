// Page icons
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import HomeIcon from "@mui/icons-material/Home";
import KeyIcon from "@mui/icons-material/Key";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ScaleIcon from "@mui/icons-material/Scale";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import TagIcon from "@mui/icons-material/Tag";
import TextFieldsIcon from "@mui/icons-material/TextFields";

// Group icons
import CalculateIcon from "@mui/icons-material/Calculate";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import FactoryIcon from "@mui/icons-material/Factory";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import { WhatsappOutlined } from "@mui/icons-material";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    key: "home",
    icon: <HomeIcon />,
    description: "Web dev tools.",
  },
];

export const calculateRoutes = [
  {
    path: "/calculate/aspect-ratio",
    name: "Aspect Ratio",
    homeName: "Aspect Ratio",
    key: "aspect-ratio",
    icon: <AspectRatioIcon />,
    description: "Calculate the aspect ratio.",
  },
  {
    path: "/calculate/units",
    name: "Units",
    homeName: "Unit Calculator",
    key: "unit-calculator",
    icon: <ScaleIcon />,
    description: "Calculate different unit types.",
  },
];

export const formatRoutes = [
  {
    path: "/format/text",
    name: "Text",
    homeName: "Text Formatter",
    key: "text-formatter",
    icon: <TextFieldsIcon />,
    description: "Format text to any case.",
  },
];

export const generateRoutes = [
  // {
  //     path: '/generate/email-signature',
  //     name: 'Email Signature',
  //     homeName: 'Email Signature',
  //     key: 'email-signature',
  //     icon: <DesignServicesIcon />,
  //     description: 'Create an email signature.',
  // },
  // {
  //     path: '/generate/password',
  //     name: 'Password',
  //     homeName: 'Password Generator',
  //     key: 'password-generator',
  //     icon: <KeyIcon />,
  //     description: 'Create a strong password.',
  // },
  {
    path: "/generate/qr-code",
    name: "QR Code",
    homeName: "Gerador de QR code",
    key: "qr-code-generator",
    icon: <QrCodeIcon />,
    description: "Crie seu QR code",
  },

  {
    path: "/generate/todo",
    name: "Whatsapp Link",
    homeName: "Gerador de Link para Whatsapp",
    key: "todo-list",
    icon: <WhatsappOutlined />,
    description: "Create a Whatsapp Link.",
  },
];

export const pickerRoutes = [
  {
    path: "/picker/color",
    name: "Color",
    homeName: "Color Picker",
    key: "color-picker",
    icon: <ColorLensIcon />,
    description: "Choose a color in HEX, RGB or HSL.",
  },
  {
    path: "/picker/item",
    name: "Item",
    homeName: "Item Picker",
    key: "item-picker",
    icon: <ShuffleIcon />,
    description: "Get a random item from a list.",
  },
  {
    path: "/picker/number",
    name: "Number",
    homeName: "Number Picker",
    key: "number-picker",
    icon: <TagIcon />,
    description: "Get a random number.",
  },
];

export const navItems = [
  // { routes: calculateRoutes, label: 'Calculate', value: 'calculate', icon: <CalculateIcon /> },
  // { routes: formatRoutes, label: 'Format', value: 'format', icon: <FormatPaintIcon /> },
  {
    routes: generateRoutes,
    label: "Geradores",
    value: "generate",
    icon: <FactoryIcon />,
  },
  // { routes: pickerRoutes, label: 'Picker', value: 'picker', icon: <SelectAllIcon /> },
];
