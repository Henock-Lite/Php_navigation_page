<?php
$page = $_GET["page"] ?? "home";

$pages = [
    'home' => 'Page Home',
    'about' => 'Page À propos',
    'contact' => 'Page Contact'
];

if (!array_key_exists($page, $pages)) {
    $title = "Page introuvable";
    $page = "404";
} else {
    $title = $pages[$page];
}

include "./header.php";
?>

<body>
    <?php require "./nav.php"; ?>
    <main>
        <?php
        $file = "partials/{$page}.php";
        if (file_exists($file)) {
            require $file;
        } else {
            echo "Page introuvable";
        }
        ?>
    </main>
    <?php require "./footer.php"; ?>
</body>
</html>
